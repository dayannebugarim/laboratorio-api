const fs = require('fs');
const PDFDocument = require('pdfkit');
const laboratorios = require('../data/labs.json');

exports.obterTodos = (req, res) => {
  res.json(laboratorios);
};

exports.cadastrarNovo = (req, res) => {
  const novoLaboratorio = req.body;
  laboratorios.push(novoLaboratorio);

  fs.writeFileSync('src/data/labs.json', JSON.stringify(laboratorios, null, 2));

  res.status(201).json({ message: 'Laboratório cadastrado com sucesso!' });
};

exports.gerarRelatorio = (req, res) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('relatorio-laboratorios.pdf'));

  doc.fontSize(14).text('Relatório de Laboratórios\n\n');
  laboratorios.forEach((lab, index) => {
    doc.fontSize(12).text(`Laboratório ${index + 1}: ${lab.nome}`);
    doc.fontSize(10).text(`Capacidade: ${lab.capacidade}`);
    doc.fontSize(10).text(`Descrição: ${lab.descricao}\n\n`);
  });

  doc.end();
  res.download('relatorio-laboratorios.pdf');
};
