jest.setTimeout(3000);

global.console = {
  ...console,
  // uncomment to ignore a log level
  //log: jest.fn(),
  //debug: jest.fn(),
  //info: jest.fn(),
  //warn: jest.fn(),
  //error: jest.fn(),
};
