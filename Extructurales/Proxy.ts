// Sujeto
interface ServicioInternet {
    accederSitioWeb(sitio: string): void;
}

// Sujeto real
class ProveedorInternet implements ServicioInternet {
    accederSitioWeb(sitio: string): void {
        console.log(`Accediendo al sitio web: ${sitio}`);
    }
}

// Proxy
class ProxyInternet implements ServicioInternet {
    private proveedor: ProveedorInternet;
    private sitiosBloqueados: string[];

    constructor() {
        this.proveedor = new ProveedorInternet();
        this.sitiosBloqueados = ["facebook.com", "twitter.com", "instagram.com"];
    }

    accederSitioWeb(sitio: string): void {
        if (this.sitioPermitido(sitio)) {
            this.proveedor.accederSitioWeb(sitio);
        } else {
            console.log(`Acceso bloqueado al sitio web: ${sitio}`);
        }
    }

    sitioPermitido(sitio: string): boolean {
        return !this.sitiosBloqueados.includes(sitio);
    }
}

// Uso del patrón Proxy
const servicioInternet: ServicioInternet = new ProxyInternet();

servicioInternet.accederSitioWeb("google.com");       // Accediendo al sitio web: google.com
servicioInternet.accederSitioWeb("facebook.com");     // Acceso bloqueado al sitio web: facebook.com
servicioInternet.accederSitioWeb("twitter.com");      // Acceso bloqueado al sitio web: twitter.com
servicioInternet.accederSitioWeb("instagram.com");    // Acceso bloqueado al sitio web: instagram.com
servicioInternet.accederSitioWeb("youtube.com");      // Accediendo al sitio web: youtube.com
