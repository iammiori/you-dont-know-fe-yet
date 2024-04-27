import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import './editor.css';

interface Props {
  onCreate: (content: string) => void;
}
export default function Editor({ onCreate }: Props) {
  const [content, setContent] = useState<string>('');
  const contentRef = useRef<HTMLInputElement>(null);

  const onChangeContent = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setContent(value);
  };

  const onKeyDown = ({ key, nativeEvent }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter' && !nativeEvent.isComposing) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      contentRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
