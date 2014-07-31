from app import app


class TestApp(object):
    def setup(self):
        pass

    def test_first_test_returns_Hello_World(self):
        assert app.first_test() == 'Hello World'

    def test_second_test_returns_Hello_World(self):
        assert app.second_test() == 'Hello World'
