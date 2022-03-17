import { Component, OnInit } from '@angular/core';
import { FaixaEtaria } from '../model/faixaEtaria';
import { Incidencia } from '../model/incidencia';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixa-etaria.service';
import { IncidenciaService } from '../service/incidencia.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css'],
})
export class OcorrenciasComponent implements OnInit {
  regioes: Regiao[] = [];
  incidencias: Incidencia[] = [];
  faixasEtarias: FaixaEtaria[] = [];

  constructor(
    private regiaoService: RegiaoService,
    private faixaEtariaService: FaixaEtariaService,
    private incidenciasService: IncidenciaService
  ) {}

  ngOnInit(): void {
    this.regiaoService.listRegioes().subscribe((regioes) => {
      this.regioes = regioes;
    });
    this.faixaEtariaService.listFaixasEtarias().subscribe((faixasetarias) => {
      this.faixasEtarias = faixasetarias;
    });
    this.incidenciasService.listIncidencias().subscribe((incidencias) => {
      this.incidencias = incidencias;
    });
  }
}
