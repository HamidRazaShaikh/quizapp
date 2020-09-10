export default function swDev() {
    var nav: any = navigator;
    let swDev: string = `${process.env.PUBLIC_URL}/sw.js`;
  
    console.log(swDev);
  
    if ("serviceWorker" in nav) {
      nav.serviceWorker
        .register(swDev)
        .then((result: any) => console.log("result", result))
        .catch((err: any) => console.log("error view", err));
    }
  }