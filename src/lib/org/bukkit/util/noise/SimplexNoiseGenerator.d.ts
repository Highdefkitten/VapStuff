import PerlinNoiseGenerator from './PerlinNoiseGenerator.js';
import World from '../../../../org/bukkit/World.js';
export default interface SimplexNoiseGenerator extends PerlinNoiseGenerator {
    noise(x: number): number;
    noise(xin: number, yin: number): number;
    noise(xin: number, yin: number, zin: number): number;
    noise(x: number, y: number, z: number, w: number): number;
    noise(x: number, octaves: number, frequency: number, amplitude: number): number;
    noise(x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
}
export default class SimplexNoiseGenerator {
    static get $javaClass(): any;
    constructor(rand: any);
    constructor(world: World);
    constructor(seed: number);
    static floor(x: number): number;
    static getInstance(): SimplexNoiseGenerator;
    static getInstance(): PerlinNoiseGenerator;
    static getNoise(xin: number): number;
    static getNoise(xin: number, yin: number): number;
    static getNoise(xin: number, yin: number, zin: number): number;
    static getNoise(x: number, y: number, z: number, w: number): number;
    static getNoise(x: number, octaves: number, frequency: number, amplitude: number): number;
    static getNoise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
    static getNoise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
}
