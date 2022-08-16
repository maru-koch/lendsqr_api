beforeEach(()=>{
  getUserModel()
})

afterEach(()=>{
  destroyUserModel()
})

test("Account Registration API",()=>{
  it("Sign up",()=>{
    expect().toBe(true);
  })
})