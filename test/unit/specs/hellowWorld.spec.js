import {createVue, destroyVM } from '../util';
import hello from '@/views/helloWorld' // 导入组件

describe('hello', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', done => {
    vm = createVue({
      components: {hello},
      template: `
        <hello :msg="msg"></hello>
      `,
      data () {
        return {
          msg: '测试字符'
        }
      }
    }, true);
    setTimeout(_ => {
      expect(vm.$el.innerText).to.equal('测试字符');
      done();
    }, 20);
  });
})
