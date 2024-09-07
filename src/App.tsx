import { useRoutes } from "react-router";
import routes from "./routes/index.tsx";

function App() {
	const element = useRoutes(routes);
	return <>{element}
	</>;
}

export default App;