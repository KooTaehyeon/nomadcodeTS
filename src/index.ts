//import { init, exit } from './myPackage';
// class Block {
//   constructor(private data: string) {}
//   static hello() {
//     return 'hi';
//   }
// }
// Math.fround();
// init({
//   url: 'true',
// });
// exit(1);

// localStorage.clear();
// init({ url: 'http', debug: true });
interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {}
}
