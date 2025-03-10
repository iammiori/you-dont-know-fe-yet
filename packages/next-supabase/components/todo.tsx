'use client';

import { Check, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';

export default function Todo({}) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <div className="w-full flex items-center gap-1">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-gray-700 checked:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
        />
        <Check
          className="absolute h-3 w-3 text-white pointer-events-none left-1 top-1"
          style={{ opacity: completed ? '1' : '0' }}
        />
      </div>

      {isEditing ? (
        <input
          className="flex-1 border-b border-b-gray-700 pb-1 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 ${completed && 'line-through text-gray-500'}`}>
          {title}
        </p>
      )}

      {isEditing ? (
        <button
          onClick={() => setIsEditing(false)}
          className="inline-flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150">
          <Check className="h-4 w-4 text-gray-700" />
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="inline-flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150">
          <Pencil className="h-4 w-4 text-gray-700" />
        </button>
      )}

      <button className="inline-flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150">
        <Trash className="h-4 w-4 text-gray-700" />
      </button>
    </div>
  );
}
