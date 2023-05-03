import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils"
import { TixButton } from "..";

describe("vueButton Test", () => {
    it("should render slot", () => {
        const vuetixButton = mount(TixButton, {
            slots: {
                default: "hello"
            }
        })
        expect(vuetixButton.text()).toBe("hello")
    })
})