import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projectsList } from '../data/portfolioData';
import { Github, ExternalLink, Code2, Plus, Trash2, SlidersHorizontal, Layers, CheckCircle } from 'lucide-react';

interface FoodItem {
  id: string;
  name: string;
  category: 'Appetizers' | 'Mains' | 'Desserts' | 'Beverages';
  price: number;
}

export default function Projects() {
  // Mini Sandbox State for the interactive simulator
  const [menuItems, setMenuItems] = useState<FoodItem[]>([
    { id: 'item-1', name: 'Paneer Tikka', category: 'Appetizers', price: 240 },
    { id: 'item-2', name: 'Butter Masala Combo', category: 'Mains', price: 320 },
    { id: 'item-3', name: 'Gulab Jamun with Ice Cream', category: 'Desserts', price: 150 },
    { id: 'item-4', name: 'Masala Chai', category: 'Beverages', price: 40 },
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<FoodItem['category']>('Mains');
  const [newItemPrice, setNewItemPrice] = useState('220');
  const [filterCategory, setFilterCategory] = useState<'All' | FoodItem['category']>('All');
  const [sandboxNotification, setSandboxNotification] = useState<string | null>(null);

  const displayMessage = (msg: string) => {
    setSandboxNotification(msg);
    setTimeout(() => setSandboxNotification(null), 3000);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const parsedPrice = parseFloat(newItemPrice);
    if (isNaN(parsedPrice) || parsedPrice <= 0) return;

    const newItem: FoodItem = {
      id: `item-${Date.now()}`,
      name: newItemName.trim(),
      category: newItemCategory,
      price: parsedPrice,
    };

    setMenuItems([newItem, ...menuItems]);
    setNewItemName('');
    setNewItemPrice('150');
    displayMessage(`Success: Added "${newItem.name}" to menu!`);
  };

  const handleDeleteItem = (id: string, name: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
    displayMessage(`Removed: "${name}" from menu!`);
  };

  const filteredMenuItems = filterCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === filterCategory);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/20 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="font-mono text-[10px] tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            Portfolio
          </span>
          <h2 className="font-sans text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Dynamic Dual-Pane Sandbox Showcase */}
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Column: Project documentation description cards */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 p-8 rounded-3xl shadow-sm dark:shadow-none">
              <div className="space-y-6">
                
                {/* Tech Badges Row */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/40 px-2.5 py-1 rounded-md border border-indigo-100/30 dark:border-indigo-900/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="font-sans text-2xl font-black text-slate-950 dark:text-white tracking-tight">
                  {project.title}
                </h3>

                {/* Key specs bullet list */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {project.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-emerald-500 mr-2.5 shrink-0 select-none">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Anchors/Buttons */}
              <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-100 dark:border-slate-800/40 mt-8">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4.5 py-2.5 bg-slate-900 dark:bg-slate-850 hover:bg-slate-800 dark:hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('sandbox-focus')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    displayMessage('Interactive playground already active on your right! Try add/remove items.');
                  }}
                  className="inline-flex items-center space-x-2 px-4.5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-indigo-500" />
                  <span>Interactive Sandbox</span>
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Live sandbox simulation (The playground container) */}
            <div
              id="sandbox-focus"
              className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 overflow-hidden relative shadow-lg shadow-indigo-950/20"
            >
              {/* Blur backdrop indicator */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6">
                {/* Sandbox Ribbon Badge Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="font-mono text-[10px] tracking-wider font-extrabold uppercase text-slate-400">
                      Live Running Sandbox Simulation
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-indigo-400 bg-indigo-950/60 border border-indigo-900/40 px-2 py-0.5 rounded">
                    HTML+CSS+JS Engine
                  </span>
                </div>

                {/* Notifications overlay toast */}
                {sandboxNotification && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-2.5 flex items-center space-x-2 text-emerald-400 text-xs shadow-sm">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span className="font-semibold">{sandboxNotification}</span>
                  </div>
                )}

                {/* Interactive Simulator Controller Form */}
                <form onSubmit={handleAddItem} className="space-y-3.5 bg-slate-950/60 p-4.5 rounded-2xl border border-slate-800/40">
                  <span className="font-sans font-bold text-xs text-white block">Add Food Segment</span>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                    {/* Item Name Input */}
                    <div className="sm:col-span-5">
                      <input
                        type="text"
                        placeholder="Food name (e.g., Spring Roll)"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        id="food_name_id"
                        aria-label="Food Item Name"
                      />
                    </div>
                    {/* Category Selector */}
                    <div className="sm:col-span-4">
                      <select
                        value={newItemCategory}
                        onChange={(e) => setNewItemCategory(e.target.value as any)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
                        id="food_category_id"
                        aria-label="Food Category"
                      >
                        <option value="Appetizers">Appetizers</option>
                        <option value="Mains">Mains</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Beverages">Beverages</option>
                      </select>
                    </div>
                    {/* Price field */}
                    <div className="sm:col-span-3">
                      <input
                        type="number"
                        placeholder="Price"
                        value={newItemPrice}
                        onChange={(e) => setNewItemPrice(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        id="food_price_id"
                        aria-label="Food Price"
                      />
                    </div>
                  </div>
                  
                  {/* Append trigger */}
                  <button
                    type="submit"
                    id="add-food-btn"
                    className="w-full flex items-center justify-center space-x-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl tracking-wider uppercase transition-colors cursor-pointer shadow-md shadow-indigo-600/10"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Food Item (JS CRUD)</span>
                  </button>
                </form>

                {/* Internal dynamic display list */}
                <div className="space-y-4">
                  {/* Horizontal Categories Filter */}
                  <div className="flex flex-wrap items-center gap-1.5 pb-2.5 border-b border-slate-800">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
                    {['All', 'Appetizers', 'Mains', 'Desserts', 'Beverages'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilterCategory(cat as any)}
                        type="button"
                        className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all border ${
                          filterCategory === cat
                            ? 'bg-white text-slate-950 border-white'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Items Rows */}
                  <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                    {filteredMenuItems.length === 0 ? (
                      <p className="text-center text-slate-500 text-xs py-6 italic">
                        No food items on this category grid.
                      </p>
                    ) : (
                      filteredMenuItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3 bg-slate-950/40 hover:bg-slate-950/70 border border-slate-800/40 rounded-xl text-xs transition-colors"
                        >
                          <div className="space-y-0.5">
                            <span className="font-bold text-slate-200">{item.name}</span>
                            <span className="block text-[10px] text-indigo-400 font-semibold uppercase">{item.category}</span>
                          </div>
                          <div className="flex items-center space-x-3 shrink-0">
                            <span className="font-mono text-xs font-semibold text-white">💰 ₹{item.price}</span>
                            <button
                              onClick={() => handleDeleteItem(item.id, item.name)}
                              type="button"
                              className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg transition-colors cursor-pointer bg-slate-900 border border-slate-800/50"
                              title="Delete menu item"
                              aria-label={`Delete ${item.name}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>

              {/* Console logs mimic */}
              <div className="pt-4 border-t border-slate-850 mt-6 font-mono text-[9px] text-slate-500 flex justify-between items-center bg-slate-950/20 px-2.5 py-1.5 rounded-lg border border-slate-850">
                <span>Console State: items.length({menuItems.length})</span>
                <span>Runtime: ESNext client DOM reactive</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
