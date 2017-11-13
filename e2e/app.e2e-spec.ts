import { TodoListPage } from './app.po';

describe('todo-list App', () => {
  let page: TodoListPage;

  beforeEach(() => {
    page = new TodoListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
