import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  productos = [
    {nombre: 'EARTHQUAKE-CDRS', descipcion: 'Guitarra Electrica', imagen: 'http://clientes.hermes-music.com.mx/files/empresa1/productos16sm.png' },
    {nombre: 'EARTHQUAKE-CSB', descipcion: 'Guitarra Electrica', imagen: 'http://clientes.hermes-music.com.mx/files/empresa1/productos7sm.png' },
    {nombre: 'GHOST RD', descipcion: 'Guitarra Electrica "vintage"', imagen: 'http://clientes.hermes-music.com.mx/files/empresa1/productos47sm.png' },
    {nombre: 'BEG-462', descipcion: 'Guitarra Electrica', imagen: 'http://clientes.hermes-music.com.mx/files/empresa1/productos21sm.png' },
  ];

  constructor() { }

  ngOnInit() {
  }

  suscripcion() {}

  contacto() {}

}
