import React, { useState, useEffect } from 'react';
import './class.css';
import { Link } from 'react-router-dom';

const Classes = () => {
    const classes = [
        {
            title: "Introduction/Basics",
            description: "Cooking Fundamentals 101",
            date: "01/02/2023 to 02/31/2023",
            duration: "4-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Baking & Pastry Principles",
            description: "Fundamentals of Baking",
            date: "01/02/2023 to 02/31/2023",
            duration: "4-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Sausage & Cheese Production",
            description: "Artisanal Charcuterie Crafting",
            date: "01/02/2023 to 02/31/2023",
            duration: "3-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Salads & Emulsified Dressings",
            description: "Salad Masterclass with Dressings",
            date: "02/07/2023 to 02/28/2023",
            duration: "2-hour long sessions each",
            price: "Included in all plans"
        },


        {
            title: "Fresh Pasta Making",
            description: "Handmade Pasta Crafting Skills",
            date: "02/07/2023 to 02/28/2023",
            duration: "4-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Menu Engineering",
            description: "Menu Optimization Strategies",
            date: "03/06/2023 to 03/31/2023",
            duration: "3-hour long sessions each",
            price: "Included in Gold plan"
        },

        {
            title: "Sous Vide and Modernist Techniques",
            description: "Innovative Cooking Methods Mastery",
            date: "03/06/2023 to 03/31/2023",
            duration: "5-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Classic & Contemporary Sauces",
            description: "Sauce Making Fundamentals",
            date: "03/06/2023 to 03/31/2023",
            duration: "3-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Macro/Micro Nutrient Calculations",
            description: "Nutrition and Food Analysis",
            date: "03/06/2023 to 03/31/2023",
            duration: "2-hour long sessions each",
            price: "Included in Gold plan"
        },

        {
            title: "Healthy Cooking & Baking",
            description: "Nourishing Cuisine Crafting Skills",
            date: "04/03/2023 to 04/30/2023",
            duration: "3-hour long sessions each",
            price: "Included in Gold plan"
        },

        {
            title: "Scaling Recipes",
            description: "Recipe Conversion Techniques",
            date: "04/03/2023 to 04/30/2023",
            duration: "2-hour long sessions each",
            price: "Included in Gold plan"
        },

        {
            title: "Food Cost",
            description: "Cost Control Methods Mastery",
            date: "04/03/2023 to 04/30/2023",
            duration: "2-hour long sessions each",
            price: "Included in Gold plan"
        },

        {
            title: "Principles of Mise en Place",
            description: "Kitchen Organization and Preparation",
            date: "04/03/2023 to 04/30/2023",
            duration: "2-hour long sessions each",
            price: "Included in Silver/Gold plan"
        },

        {
            title: "Breads",
            description: "Artisan Bread Making Skills",
            date: "05/01/2023 to 05/31/2023",
            duration: "4-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Cakes",
            description: "Cake Decorating Essential",
            date: "05/01/2023 to 05/31/2023",
            duration: "4-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Special Diets",
            description: "Catering to Dietary Restrictions",
            date: "05/01/2023 to 05/31/2023",
            duration: "3-hour long sessions each",
            price: "Included in Silver/Gold plan"
        },

        {
            title: "Mixing Methods",
            description: "Blending Techniques for Baking",
            date: "05/01/2023 to 05/31/2023",
            duration: "2-hour long sessions each",
            price: "Included in Silver/Gold plan"
        },

        {
            title: "Cookies and Cookie Decoration",
            description: "Creative Cookie Crafting",
            date: "06/05/2023 to 06/30/2023",
            duration: "2-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Custards, Creams, and Fillings",
            description: " Rich and Creamy Dessert Making",
            date: "06/05/2023 to 06/30/2023",
            duration: "4-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Frozen Desserts",
            description: "Chilled Treats Mastery",
            date: "06/05/2023 to 06/30/2023",
            duration: "5-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Dessert Plating",
            description: "Elegant Dessert Presentation Techniques",
            date: "06/05/2023 to 06/30/2023",
            duration: "2-hour long sessions each",
            price: "Included in Silver/Gold plan"
        },

        {
            title: "Pies & Tarts",
            description: "Perfecting Fruit Filling Pies",
            date: "06/05/2023 to 06/30/2023",
            duration: "4-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Knife Skills",
            description: "Precision Cutting Techniques Mastery",
            date: "07/03/2023 to 07/31/2023",
            duration: "2-hour long sessions each",
            price: "Included in Silver/Gold plan"
        },

        {
            title: "Organization & Professionalism",
            description: "Kitchen Management Essentials",
            date: "07/03/2023 to 07/31/2023",
            duration: "2-hour long session each",
            price: "Included in Gold plan"
        },

        {
            title: "Working with Commercial Kitchen Equipment",
            description: "Commercial Kitchen Operations Training",
            date: "07/03/2023 to 07/31/2023",
            duration: "2-hour long sessions each",
            price: "Included in Gold plan"
        },

        {
            title: "Dry & Moist Heat Cooking Methods",
            description: "Cooking Techniques Fundamentals",
            date: "07/03/2023 to 07/31/2023",
            duration: "5-hour long sessions each",
            price: "Included in Silver/Gold plan"
        },

        {
            title: "Meat, Seafood & Poultry Fabrication & Cookery",
            description: "Butchery and Cooking Techniques for Animal Proteins",
            date: "08/07/2023 to 08/31/2023",
            duration: "5-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Production of Soups, Stocks, & Mother Sauces",
            description: "Flavorful Stock and Sauce Making Techniques",
            date: "08/07/2023 to 08/31/2023",
            duration: "5-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Vegetable & Fruit Cookery",
            description: "Vegetable and Fruit Preparation and Cooking Techniques",
            date: "08/07/2023 to 08/31/2023",
            duration: "5-hour long sessions each",
            price: "Included in all plans"
        },

        {
            title: "Egg Cookery",
            description: "Creative Egg Dishes Crafting Skills",
            date: "08/07/2023 to 08/31/2023",
            duration: "3-hour long sessions each",
            price: "Included in all plans"
        },


        
    ]
    return (
        <div className="classes_table">
          <h1 className="title">Class Overview</h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem) => (
                <tr>
                  <td>{classItem.title}</td>
                  <td>{classItem.description}</td>
                  <td>{classItem.date}</td>
                  <td>{classItem.duration}</td>
                  <td>{classItem.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}

export default Classes;