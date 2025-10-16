import "./App.css";
import { useState } from "react";
import { kebabCaseToTitleCase } from "./helpers";

function App() {
	const [disable, setDisable] = useState(false);
	const [btnColor, setBtnColor] = useState("medium-violet-red");
	const newBtnColor =
		btnColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
	const newColorTitleCase = kebabCaseToTitleCase(newBtnColor);

	return (
		<div>
			<div>
				<button
					className={disable ? `btn-gray` : btnColor}
					onClick={() => setBtnColor(newBtnColor)}
					disabled={disable}
				>
					Change to {newColorTitleCase}
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
