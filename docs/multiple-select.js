{
  const jsCode = `
import { ref, createApp } from 'vue'
import VueSelect from 'vue-next-select'

export default createApp({
  name: 'app',
  components: {
    VueSelect
  },
  setup() {
    const model = ref(['Sinatra', 'Vue.js'])

    const options = ref([
      { name: 'Vue.js', language: 'JavaScript' },
      { name: 'Rails', language: 'Ruby' },
      { name: 'Sinatra', language: 'Ruby' },
      { name: 'Laravel', language: 'PHP' },
      { name: 'Phoenix', language: 'Elixir' },
    ])

    return {
      model,
      options,
    }
  }
})
`.trim()

  const htmlCode = `
<vue-select
  v-model="model"
  :options="options"
  multiple
  label-by="langauge"
  track-by="name"
  value-by="name"
  :min="1"
  :max="3"
  placeholder="Pick some"
></vue-select>
`.trim()

  const { ref, createApp } = Vue

  const app = createApp({
    name: 'app',
    setup() {
      const model = ref(['Sinatra', 'Vue.js'])

      const options = ref([
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' },
      ])

      return {
        model,
        options,

        jsCode,
        htmlCode,
      }
    },
    template: `
      <vue-select
        v-model="model"
        :options="options"
        multiple
        label-by="language"
        track-by="name"
        value-by="name"
        :min="1"
        :max="3"
        placeholder="Pick some"
      ></vue-select>
      <pre>{{ model }}</pre>

      <p><i>Code sample:</i></p>
      <pre><code class="html">{{ htmlCode }}</code></pre>
      <pre><code class="javascript">{{ jsCode }}</code></pre>
    `,
  })

  app.component('vue-select', VueNextSelect)
  app.mount(document.querySelector('#multiple-select'))
}
