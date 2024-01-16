const { saveData } = require('C:/Users/anton/Desktop/INSTRUKTOR/upi-projekt/instruktor/registracija.js');

beforeEach(() => {
  localStorage.clear();
});

function measurePerformance(callback) {
  const startTime = performance.now();
  callback();
  const endTime = performance.now();
  return endTime - startTime;
}

test('Uneseni ispravni podaci', () => {
  document.body.innerHTML = `
    <input id="name" value="Ana">
    <input id="surname" value="Anic">
    <input id="email" value="anaanic@gmail.com">
    <input id="psw" value="lozinka123">
    <input id="userType" value="instructor">
  `;

  saveData();

  const user_records = JSON.parse(localStorage.getItem('users'));

  expect(user_records).toHaveLength(1);
  expect(user_records[0].name).toBe('Ana');
});

test('Neispravno ime', () => {
  document.body.innerHTML = `
    <input id="name" value="123">
    <input id="surname" value="Anic">
    <input id="email" value="anaanic@gmail.com">
    <input id="psw" value="lozinka123">
    <input id="userType" value="instructor">
  `;
  

  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  saveData();

  expect(mockAlert).toHaveBeenCalledWith('Neispravno ime');

  mockAlert.mockRestore();

});


test('Neispravno prezime', () => {
    document.body.innerHTML = `
    <input id="name" value="Ana">
    <input id="surname" value="1">
    <input id="email" value="anaanic@gmail.com">
    <input id="psw" value="lozinka123">
    <input id="userType" value="instructor">
  `;

  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  saveData();

  expect(mockAlert).toHaveBeenCalledWith('Neispravno prezime');

  mockAlert.mockRestore();

});

test('Neispravan email', () => {
    document.body.innerHTML = `
    <input id="name" value="Ana">
    <input id="surname" value="Anic">
    <input id="email" value="anaanic">
    <input id="psw" value="lozinka123">
    <input id="userType" value="instructor">
  `;

  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  saveData();

  expect(mockAlert).toHaveBeenCalledWith('Neispravan email format');

  mockAlert.mockRestore();

});

test('Kratka lozinka', () => {
    document.body.innerHTML = `
    <input id="name" value="Ana">
    <input id="surname" value="Anic">
    <input id="email" value="anaanic@gmail.com">
    <input id="psw" value="123">
    <input id="userType" value="instructor">
  `;

  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  saveData();

  expect(mockAlert).toHaveBeenCalledWith('Lozinka mora imati najmanje 8 znakova');

  mockAlert.mockRestore();

});

test('Moraju sva polja biti popunjena', () => {
  document.body.innerHTML = `
  <input id="name" value="Ana">
  <input id="surname" value="Anic">
  <input id="email" value="anaanic@gmail.com">
  <input id="psw" value="lozinka123">
  <input id="userType" value="">
`;

const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

saveData();

expect(mockAlert).toHaveBeenCalledWith('Molimo popunite sva polja');

mockAlert.mockRestore();

});
