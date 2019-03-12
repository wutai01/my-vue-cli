import * as Handle from '@/utils/tools.js';
describe('Handle 方法单侧', () => {
  it('sum', done => {
    expect(Handle.sum(2, 3)).to.equal(5);
    done()
  });
  it('objEqual', done => {
    expect(Handle.objEqual({a:1}, {a:1})).to.be.ok;
    expect(Handle.objEqual({a:1}, {a:2})).to.not.be.ok;
    done()
  });
})
