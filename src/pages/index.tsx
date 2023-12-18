import { ReactElement, useState } from 'react';

const Index = (): ReactElement => {
  const [todo, setTodo] = useState<{ text: string; risked: boolean; id: string }[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = () => {
    setTodo((prev) => [...prev, { text: input, risked: false, id: new Date().getTime().toString() }]);
    setInput('');
  };

  const removeTodo = (id: string) => {
    setTodo((prev) => {
      const todoRest = prev.filter((item) => {
        return item.id !== id;
      });

      return todoRest;
    });
  };

  const riskedItem = (id: string) => {
    setTodo((prev) => {
      const obj = JSON.parse(JSON.stringify(prev));
      const index = obj.findIndex((item) => {
        return item.id === id;
      });
      obj[index].risked = !obj[index].risked;
      return obj;
    });
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen px-8">
      <h1 className="text-black text-lg font-bold">TODO LIST</h1>
      <ul className="max-w-[500px] w-full">
        {todo.map((item) => {
          return (
            <li
              key={item.id}
              className="bg-gray-200 mt-1 border-2 border-white hover:border-gray-300  cursor-pointer flex justify-between items-center">
              <button
                type="button"
                className={`px-3 py-4 flex-1 text-left ${item.risked ? 'underline' : ''}`}
                onKeyDown={(event) => {
                  if (event.code === 'Backspace') {
                    removeTodo(item.id);
                  }

                  if (event.code === 'Enter') {
                    riskedItem(item.id);
                  }
                }}
                onClick={() => {
                  riskedItem(item.id);
                }}>
                {item.text}{' '}
              </button>
              <button
                type="button"
                className="p-2"
                onClick={(event) => {
                  event.stopPropagation();
                  removeTodo(item.id);
                }}>
                X
              </button>
            </li>
          );
        })}
      </ul>

      <label htmlFor="item" className="mt-2 max-w-[500px] w-full">
        <input
          type="text"
          id="item"
          className="px-2 py-4 border-2 border-gray-400 w-full"
          placeholder="Add todo"
          onKeyDown={(event) => {
            if (event.code === 'Enter') {
              addTodo();
            }
          }}
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
      </label>

      <button
        type="button"
        className="mt-4 border-blue-200 border-2 bg-blue-200 px-2 py-4 max-w-[500px] w-full"
        onClick={() => {
          addTodo();
        }}>
        add todo
      </button>
    </div>
  );
};
export default Index;
