import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { setInitialTest } from '../../store/app/actions/AppActions';
//selectors
import { getAppTestString } from '../../store/app/selectors/AppSelectors';

const TestComponent = () => {
	const dispatch = useDispatch(),
		testAction = useSelector((state) => getAppTestString({ state }));

	return (
		<div className="container" style={{ textAlign: 'center' }}>
			<p>
				Environment variable <strong>{process.env.NEXT_PUBLIC_GATE_WAY_URL}</strong>
			</p>
			<p>
				Testing the store <strong>{testAction}</strong>
			</p>
			<button className="std-btn primary" onClick={() => dispatch(setInitialTest())}>
				Change text
			</button>
		</div>
	);
};

export default TestComponent;
