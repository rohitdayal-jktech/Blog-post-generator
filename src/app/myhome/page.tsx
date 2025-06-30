'use client';
import { useState, useEffect } from "react"
export default function App(){
      const [count, setCount] = useState(0);
      const [snack, setSnack] = useState<string | null>(null)

      function showSnackbar(message: string) {
    setSnack(message);
    setTimeout(() => setSnack(null), 2000);
  }
  useEffect(() => {
    showSnackbar("Component mounted (empty dependency array)");
  }, []);
      useEffect(() => {
    if (count !== 0) {
      showSnackbar(`Count changed to ${count}`);
                    }
                        }, [count]);
      function SetCnter(){
            setCount(count + 1);
      }
    return (
    <div className="p-4 text-center">
        <h1 className="text-xl font-bold mb-4">Counter App</h1>
        <p className="text-2xl mb-4">Count: {count}</p>
        <button
          onClick={SetCnter}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
        {snack && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-xl border border-gray-700 backdrop-blur-sm animate-fade-in-out text-sm">
          {snack}
        </div>
      )}

    </div>
    
) ;
}
 