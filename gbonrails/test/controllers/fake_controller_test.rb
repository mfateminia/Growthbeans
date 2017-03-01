require 'test_helper'

class FakeControllerTest < ActionDispatch::IntegrationTest
  test "should get fakefile" do
    get fake_fakefile_url
    assert_response :success
  end

end
