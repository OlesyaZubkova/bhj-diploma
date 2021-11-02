/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const toggleButton = document.querySelector('.sidebar-toggle');

          toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-open');
            document.body.classList.toggle('sidebar-collapse');
          });
  }

  /**
   * При нажатии на кнопку входа показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регистрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const sidebarPanel = document.querySelector('.sidebar');

    sidebarPanel.addEventListener('click', (e) => {
      if (e.target.closest('.menu-item_register')) {
        App.getModal('register').open();
      } else if (e.target.closest('.menu-item_login')) {
        App.getModal('login').open();
      } else if (e.target.closest('.menu-item_logout')) {
        User.logout((err, response) => {
          if (err) {
            console.log('Ошибка!') 
          } else if (response.success) {
            App.setState('init');
          }
        });
      }
    });
  }
}