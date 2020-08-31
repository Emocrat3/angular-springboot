import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  titulo = 'Generar PDF con Angular JS 5';
  imagen1 = 'assets/img/tc.jpg';
  imagen2 = 'assets/img/pm.jpg';
  imagen3 = 'assets/img/al.jpg';

  constructor() { }

  ngOnInit() {
  }
  generarPDF(){
   const doc= new jsPDF();
   doc.text('Ejemplo del reporte',10,10);
   doc.save('reporte.pdf');
    
  }
  

}
