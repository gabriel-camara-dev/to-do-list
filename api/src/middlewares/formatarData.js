async function formatarData(req,res,next) {
     try {
          const { data } = req.body
          if (data) {
               const [dia, mes, ano] = data.split('/');
               req.body.data =  `${ano}-${mes}-${dia}`;
          }

          return next()
     } catch (error) {
          return res.status(500).json({ error: 'Erro ao formatar a data!' });
     }
}

module.exports = formatarData;