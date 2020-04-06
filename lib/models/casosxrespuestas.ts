/**
 * Copyright 2020, Ingenia, S.A.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * @author jamartin@ingenia.es
 */
import { Entity, Column, PrimaryGeneratedColumn, Index, JoinColumn, ManyToOne } from 'typeorm'
import { Casos } from './casos';
import { Respuestas } from './respuestas';

@Entity()
export class Casosxrespuestas {

    @Index()
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Casos)
    @JoinColumn({
        name: 'idcaso',
        referencedColumnName: 'id'
    })
    casos: Casos;

    @ManyToOne(type => Respuestas)
    @JoinColumn({
        name: 'idrespuesta',
        referencedColumnName: 'id'
    })
    respuestas: Respuestas;

}
