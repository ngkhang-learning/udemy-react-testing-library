import "./App.css";
import { useState } from "react";

function App() {
	const [disable, setDisable] = useState(false);
	const [btnColor, setBtnColor] = useState("red");
	const newBtnColor = btnColor === "red" ? "blue" : "red";

	return (
		<div>
			<div>
				<button
					className={disable ? `btn-gray` : `btn-${btnColor}`}
					onClick={() => setBtnColor(newBtnColor)}
					disabled={disable}
				>
					Change to {newBtnColor}
				</button>
			</div>

			<div>
				<label htmlFor="disable-button-checkbox">Disable Button</label>
				<input
					type="checkbox"
					id="disable-button-checkbox"
					defaultChecked={disable}
					onChange={(e) => setDisable(e.target.checked)}
				/>
			</div>
		</div>
	);
}

export default App;
