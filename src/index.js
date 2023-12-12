import components  from "./components";

const plugin={
	install(app){
		Object.entries(components).forEach(([name, component]) => {
			app.component(name, component);
		});
	}
}

export default plugin;