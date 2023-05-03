import "@/style/index.css"
import { forEach } from "lodash-es"
import type { App } from "vue"
import * as components from "@/components/index"

export const createVuetixUI = () => {
    components["TixButton"].name = "xButton"
    return {
        install: (app:App) => {
            forEach(components, (component) => {
                app.component(component.name, component)
            })
        }
    }
}

export { components }