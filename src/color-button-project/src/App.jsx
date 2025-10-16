import "./App.css";
import { useState } from "react";

function App() {
	const [btnColor, setBtnColor] = useState("red");
	const newBtnColor = btnColor === "red" ? "blue" : "red";

	return (
		<div>
			<div>
				<button
					aria-disabled={false}
					className={`btn-${btnColor}`}
					onClick={() => setBtnColor(newBtnColor)}
				>
					Change to {newBtnColor}
				</button>
			</div>
		</div>
	);
}

export default App;
