import { screen } from '@testing-library/react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 css class가 적용된다', async () => {
  // Arrange - 테스트를 위한 환경 만들기
  // -> render API 호출 -> 테스트 환경의 jsDOM에 리액트 컴포넌트가 렌덩링된 DOM구조가 반영
  // -> jsDOM: Node.js에서 사용하기 위해 많은 웹 표준을 순수 자바스크립트로 구현
  await render(<TextField className={'my-class'} />);

  // Act - 테스트할 동작 발생 (클릭, 메서드 호출, prop변경 ..)
  // 여긴 렌더링 검증이라 생략

  // Assert - 올바른 동작이 실행되었는지 검증
  // -> 렌더링 후 DOM에 해당 class가 존재하는지 검증
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
    'my-class',
  );
});
