"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const products_model_1 = __importDefault(require("../db/models/products.model"));
class ProductsService {
    constructor(ProductsModel) {
        this.ProductsModel = ProductsModel;
    }
    //------------Metodo para llenar Base de Datos-------
    // async fullDataBase(MoviesArr: string[]) {
    //   MoviesArr.map(async (e: string) => {
    //     let films = await axios.get(url, { params: { t: e, apikey: apiKey } });
    //     const {
    //       Title: name,
    //       Year: year,
    //       Genre: genre,
    //       Poster: poster,
    //       Country: country,
    //       Rated: rated,
    //       Released: released,
    //       Runtime: runtime,
    //       Director: director,
    //       Actors: actors,
    //       Plot: plot,
    //       Language: language,
    //       imdbVotes: imdbVotes,
    //       imdbRating: imdbRating,
    //     } = films.data;
    //     await this.insertOne({
    //       id,
    //       name,
    //       rated,
    //       description,
    //       foto,
    //       comment,
    //       status:true,
    //     });
    //   });
    //   return "Data Base full filed";
    // }
    //-----------------Metodo para traer peliculas de Base de Datos-----
    /*================ TRAER TODO DE LA DATA BASE ====================== */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const ProductsRows = yield products_model_1.default.findAll();
            console.log(ProductsRows.length);
            return ProductsRows;
        });
    }
    //----------------- Creador de peliculas -------
    insertOne(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldProd = yield products_model_1.default.findOne({ where: { name: product.name } });
            console.log(oldProd);
            if (!oldProd) {
                return yield products_model_1.default.create(product, { validate: true });
            }
            else
                console.log("ese producto ya existe");
        });
    }
}
exports.ProductsService = ProductsService;
//Todo probado :)
