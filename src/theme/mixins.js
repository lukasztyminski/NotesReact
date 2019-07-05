export const horizontalCenter = () => `
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

const flex = ($direction = 'row', $align, $justify) => `
  display: flex;
	flex-direction: ${$direction};
	align-items: ${$align};
	justify-content: ${$justify};
`;

export const flexColumnCenter = flex('column', 'center', 'center');
export const flexColumnStart = flex('column', 'flex-start', 'flex-start');
export const flexRowCenter = flex('', 'center', 'center');
