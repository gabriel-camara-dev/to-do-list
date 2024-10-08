async function formatarHorario(req, res, next) {
     try {
         const { horario } = req.body;
         if (horario && horario.length === 5) {
             req.body.horario = `${horario}:00`; 
         }
         return next(); 
     } catch (error) {
         return res.status(500).json({ error: 'Erro ao formatar o horário!' });
     }
 }
 
 module.exports = formatarHorario;