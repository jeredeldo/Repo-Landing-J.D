'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, X, Delete } from 'lucide-react';

export function HiddenCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [resetNext, setResetNext] = useState(false);

  const handleNumber = useCallback((num: string) => {
    if (resetNext) {
      setDisplay(num);
      setResetNext(false);
    } else {
      setDisplay((prev) => (prev === '0' ? num : prev + num));
    }
  }, [resetNext]);

  const handleDecimal = useCallback(() => {
    if (resetNext) {
      setDisplay('0.');
      setResetNext(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay((prev) => prev + '.');
    }
  }, [display, resetNext]);

  const handleOperation = useCallback((op: string) => {
    if (previousValue && operation && !resetNext) {
      handleEquals();
    }
    setPreviousValue(display);
    setOperation(op);
    setResetNext(true);
  }, [display, previousValue, operation, resetNext]);

  const handleEquals = useCallback(() => {
    if (!previousValue || !operation) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result: number;

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        result = current === 0 ? 0 : prev / current;
        break;
      case '%':
        result = prev % current;
        break;
      default:
        return;
    }

    const resultStr = Number.isInteger(result)
      ? result.toString()
      : parseFloat(result.toFixed(10)).toString();

    setDisplay(resultStr);
    setPreviousValue(null);
    setOperation(null);
    setResetNext(true);
  }, [display, previousValue, operation]);

  const handleClear = useCallback(() => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setResetNext(false);
  }, []);

  const handleDelete = useCallback(() => {
    if (display.length === 1 || (display.length === 2 && display.startsWith('-'))) {
      setDisplay('0');
    } else {
      setDisplay((prev) => prev.slice(0, -1));
    }
  }, [display]);

  const handleToggleSign = useCallback(() => {
    if (display !== '0') {
      setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
    }
  }, [display]);

  const buttons = [
    { label: 'C', type: 'function' as const, action: handleClear },
    { label: '±', type: 'function' as const, action: handleToggleSign },
    { label: '%', type: 'operation' as const, action: () => handleOperation('%') },
    { label: '÷', type: 'operation' as const, action: () => handleOperation('÷') },
    { label: '7', type: 'number' as const, action: () => handleNumber('7') },
    { label: '8', type: 'number' as const, action: () => handleNumber('8') },
    { label: '9', type: 'number' as const, action: () => handleNumber('9') },
    { label: '×', type: 'operation' as const, action: () => handleOperation('×') },
    { label: '4', type: 'number' as const, action: () => handleNumber('4') },
    { label: '5', type: 'number' as const, action: () => handleNumber('5') },
    { label: '6', type: 'number' as const, action: () => handleNumber('6') },
    { label: '-', type: 'operation' as const, action: () => handleOperation('-') },
    { label: '1', type: 'number' as const, action: () => handleNumber('1') },
    { label: '2', type: 'number' as const, action: () => handleNumber('2') },
    { label: '3', type: 'number' as const, action: () => handleNumber('3') },
    { label: '+', type: 'operation' as const, action: () => handleOperation('+') },
    { label: '0', type: 'number' as const, action: () => handleNumber('0'), wide: true },
    { label: '.', type: 'number' as const, action: handleDecimal },
    { label: '=', type: 'equals' as const, action: handleEquals },
  ];

  const getButtonStyle = (type: string) => {
    switch (type) {
      case 'function':
        return 'bg-zinc-700 hover:bg-zinc-600 text-white';
      case 'operation':
        return 'bg-amber-500 hover:bg-amber-400 text-black font-black';
      case 'equals':
        return 'bg-gold-gradient text-black font-black';
      default:
        return 'bg-zinc-800 hover:bg-zinc-700 text-white';
    }
  };

  return (
    <>
      {/* Botón Oculto — Abajo del todo a la derecha */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-3 right-3 z-40 w-9 h-9 rounded-full bg-zinc-950/80 border border-zinc-800/60 text-zinc-600 hover:text-amber-400 hover:border-amber-500/50 hover:bg-zinc-900 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/20 backdrop-blur-md opacity-25 hover:opacity-100"
        aria-label="Calculadora secreta"
        title="Calculadora"
      >
        <Calculator className="w-4 h-4" />
      </button>

      {/* Modal de Calculadora */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Calculadora */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-14 right-3 sm:bottom-16 sm:right-6 z-50 w-72 rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20 border border-amber-500/30"
              style={{ background: 'rgba(10, 10, 12, 0.98)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    ALBION CALC
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleDelete}
                    className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    aria-label="Borrar último dígito"
                  >
                    <Delete className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    aria-label="Cerrar calculadora"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Display */}
              <div className="px-5 py-3">
                {/* Operación previa */}
                <div className="h-5 text-right text-xs text-amber-400/70 font-mono">
                  {previousValue && operation ? `${previousValue} ${operation}` : ''}
                </div>
                {/* Resultado actual */}
                <div
                  className={`text-right font-black font-mono tracking-tight ${
                    display.length > 12
                      ? 'text-xl'
                      : display.length > 8
                      ? 'text-2xl'
                      : 'text-4xl'
                  } text-white leading-tight`}
                >
                  {display}
                </div>
              </div>

              {/* Grid de Botones */}
              <div className="px-3 pb-4 grid grid-cols-4 gap-2">
                {buttons.map((btn) => (
                  <button
                    key={btn.label}
                    onClick={btn.action}
                    className={`${
                      btn.wide ? 'col-span-2' : ''
                    } h-13 rounded-2xl text-base font-bold transition-all active:scale-95 ${getButtonStyle(
                      btn.type
                    )}`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
