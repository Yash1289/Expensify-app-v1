import { TestScheduler } from "jest"
import React from "react"
import { shallow } from "enzyme"
import ReactShallowRenderer from "react-test-renderer/shallow"
import Header from "../../components/Header"


test("Should render header component ", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot(); 
      /*  const renderer = new ReactShallowRenderer();
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();     */
})

