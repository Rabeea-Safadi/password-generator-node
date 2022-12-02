"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const views_controller_1 = require("../controllers/views.controller");
const viewsRoutes = (0, express_1.Router)();
viewsRoutes.get('/', views_controller_1.indexHandler);
viewsRoutes.post('/generate', views_controller_1.generatorHandler);
exports.default = viewsRoutes;
