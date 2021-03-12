import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./index.css";
import router from "./router";
import { setupAuth } from './auth';

const app = createApp(App);
app.use(router);

function callbackRedirect(appState) {
  router.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : '/'
  );
}

let authConfig = {
	"domain": process.env.VUE_APP_domain,
	"client_id": process.env.VUE_APP_client_id,
	"redirect_uri": process.env.VUE_APP_redirect_uri
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
	app.use(auth)
	app.mount("#app");
})




