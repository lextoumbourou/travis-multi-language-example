from app import app


class TestApp(object):
    def setup(self):
        pass

    def test_first_test_returns_Hello_World(self):
        assert app.hello_world_printer() == 'Hello World'
