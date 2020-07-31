import { reactive } from 'vue'
import { mount } from '@vue/test-utils'
import VueSelect from '../dist/vue-select.es'

it('should select', async () => {
  const state = reactive({
    model: [],
    options: [0, 1, 2],
  })
  const app = {
    setup() {
      return {
        state,
      }
    },
    components: {
      VueSelect,
    },
    template: `
      <vue-select
        v-model="state.model"
        :options="state.options"
        multiple
      ></vue-select>
    `,
  }
  const wrapper = mount(app)

  expect(state.model).toStrictEqual([])

  await wrapper.findAll('.vue-select-dropdown-item')[0].trigger('click')
  expect(state.model).toStrictEqual([0])
  await wrapper.findAll('.vue-select-dropdown-item')[1].trigger('click')
  expect(state.model).toStrictEqual([0, 1])
  await wrapper.findAll('.vue-select-dropdown-item')[2].trigger('click')
  expect(state.model).toStrictEqual([0, 1, 2])
})

it('should deselect', async () => {
  const state = reactive({
    model: [0],
    options: [0, 1, 2],
  })
  const app = {
    setup() {
      return {
        state,
      }
    },
    components: {
      VueSelect,
    },
    template: `
      <vue-select
        v-model="state.model"
        :options="state.options"
        multiple
      ></vue-select>
    `,
  }
  const wrapper = mount(app)

  expect(state.model).toStrictEqual([0])

  await wrapper.find('.vue-select-input').trigger('focus')
  await wrapper.findAll('.vue-select-dropdown-item')[0].trigger('click')
  expect(state.model).toStrictEqual([])

  await wrapper.findAll('.vue-select-dropdown-item')[1].trigger('click')
  expect(state.model).toStrictEqual([1])

  await wrapper.findAll('.vue-select-dropdown-item')[1].trigger('click')
  expect(state.model).toStrictEqual([])
})

it('should not limit min length by default', async () => {
  const state = reactive({
    model: [0, 1, 2],
    options: [0, 1, 2],
  })
  const app = {
    setup() {
      return {
        state,
      }
    },
    components: {
      VueSelect,
    },
    template: `
      <vue-select
        v-model="state.model"
        :options="state.options"
        multiple
      ></vue-select>
    `,
  }
  const wrapper = mount(app)

  expect(state.model).toStrictEqual([0, 1, 2])

  await wrapper.find('.vue-select-input').trigger('focus')
  await wrapper.findAll('.vue-select-dropdown-item')[0].trigger('click')
  expect(state.model).toStrictEqual([1, 2])
  await wrapper.findAll('.vue-select-dropdown-item')[1].trigger('click')
  expect(state.model).toStrictEqual([2])
  await wrapper.findAll('.vue-select-dropdown-item')[2].trigger('click')
  expect(state.model).toStrictEqual([])
})

it('should limit length by given min length', async () => {
  const state = reactive({
    model: [0, 1, 2],
    options: [0, 1, 2],
  })
  const app = {
    setup() {
      return {
        state,
      }
    },
    components: {
      VueSelect,
    },
    template: `
      <vue-select
        v-model="state.model"
        :options="state.options"
        multiple
        :min="1"
      ></vue-select>
    `,
  }
  const wrapper = mount(app)

  expect(state.model).toStrictEqual([0, 1, 2])

  await wrapper.find('.vue-select-input').trigger('focus')
  await wrapper.findAll('.vue-select-dropdown-item')[0].trigger('click')
  expect(state.model).toStrictEqual([1, 2])
  await wrapper.findAll('.vue-select-dropdown-item')[1].trigger('click')
  expect(state.model).toStrictEqual([2])
  await wrapper.findAll('.vue-select-dropdown-item')[2].trigger('click')
  expect(state.model).toStrictEqual([2])
})

it('should not limit max length by default', async () => {
  const state = reactive({
    model: [],
    options: [0, 1, 2],
  })
  const app = {
    setup() {
      return {
        state,
      }
    },
    components: {
      VueSelect,
    },
    template: `
      <vue-select
        v-model="state.model"
        :options="state.options"
        multiple
      ></vue-select>
    `,
  }
  const wrapper = mount(app)

  expect(state.model).toStrictEqual([])

  await wrapper.find('.vue-select-input').trigger('focus')
  await wrapper.findAll('.vue-select-dropdown-item')[0].trigger('click')
  expect(state.model).toStrictEqual([0])
  await wrapper.findAll('.vue-select-dropdown-item')[1].trigger('click')
  expect(state.model).toStrictEqual([0, 1])
  await wrapper.findAll('.vue-select-dropdown-item')[2].trigger('click')
  expect(state.model).toStrictEqual([0, 1, 2])
})

it('should limit length by given max length', async () => {
  const state = reactive({
    model: [],
    options: [0, 1, 2],
  })
  const app = {
    setup() {
      return {
        state,
      }
    },
    components: {
      VueSelect,
    },
    template: `
      <vue-select
        v-model="state.model"
        :options="state.options"
        multiple
        :max="2"
      ></vue-select>
    `,
  }
  const wrapper = mount(app)

  expect(state.model).toStrictEqual([])

  await wrapper.find('.vue-select-input').trigger('focus')
  await wrapper.findAll('.vue-select-dropdown-item')[0].trigger('click')
  expect(state.model).toStrictEqual([0])
  await wrapper.findAll('.vue-select-dropdown-item')[1].trigger('click')
  expect(state.model).toStrictEqual([0, 1])
  await wrapper.findAll('.vue-select-dropdown-item')[2].trigger('click')
  expect(state.model).toStrictEqual([0, 1])
})
