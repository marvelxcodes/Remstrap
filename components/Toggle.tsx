import { StatePropsType } from '@/utils/types';

const Toggle = ({ state, setState }: StatePropsType<boolean>) => {
	function clickHandler() {
		setState((state) => !state);
	}
	return (
		<div
			onClick={clickHandler}
			style={!state ? { backgroundColor: '#555' } : {}}
			className='p-1 w-10 shadow-sm shadow-[#5d5d5d] cursor-pointer transition-all rounded-[3rem] m-3 bg-black outline-[#ffffff4b] outline-1 outline antialiased flex'
		>
			<div
				style={
					state
						? {
								transform: 'translateX(1rem)',
								backgroundColor: '#fff',
						  }
						: {
								backgroundColor: '#000',
						  }
				}
				className='rounded-full h-4 w-4 transition-all relative'
			></div>
		</div>
	);
};

export default Toggle;
