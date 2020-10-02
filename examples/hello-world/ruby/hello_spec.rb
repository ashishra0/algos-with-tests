require_relative 'hello'

RSpec.describe HelloWorld, "#hello" do
  context "Valid scenario" do
    it "returns 'Hello, World!'" do
      message = HelloWorld.new
      expect(message.hello).to eq "Hello, World!"
    end
  end
end