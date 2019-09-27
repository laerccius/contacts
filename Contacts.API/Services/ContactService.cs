using System.Collections.Generic;
using Contacts.API.Data;
using Contacts.API.Models.Contact;

namespace Contacts.API.Services
{
    public class ContactService
    {
        private ContactDbContext _context;

        public ContactService(ContactDbContext context)
        {
            _context = context;
        }

        public ContactModel Get(int id)
        {
            return null;
            // codigoBarras = codigoBarras?.Trim().ToUpper();
            // if (!String.IsNullOrWhiteSpace(codigoBarras))
            // {
            //     return _context.Produtos.Where(
            //         p => p.CodigoBarras == codigoBarras).FirstOrDefault();
            // }
            // else
            //     return null;
        }

        public IEnumerable<ContactModel> List()
        {
            return null;
            // return _context.Produtos
            //     .OrderBy(p => p.Nome).ToList();
        }

        public bool Insert(ContactModel contact)
        {
            // Result Result = DadosValidos(dadosProduto);
            // Result.Acao = "Inclusão de Produto";

            // if (Result.Inconsistencias.Count == 0 &&
            //     _context.Produtos.Where(
            //     p => p.CodigoBarras == dadosProduto.CodigoBarras).Count() > 0)
            // {
            //     Result.Inconsistencias.Add(
            //         "Código de Barras já cadastrado");
            // }

            // if (Result.Inconsistencias.Count == 0)
            // {
            //     _context.Produtos.Add(dadosProduto);
            //     _context.SaveChanges();
            // }

            // return Result;
            return false;
        }

        public bool Update(ContactModel contact)
        {
            // Result Result = DadosValidos(dadosProduto);
            // Result.Acao = "Atualização de Produto";

            // if (Result.Inconsistencias.Count == 0)
            // {
            //     Produto produto = _context.Produtos.Where(
            //         p => p.CodigoBarras == dadosProduto.CodigoBarras).FirstOrDefault();

            //     if (produto == null)
            //     {
            //         Result.Inconsistencias.Add(
            //             "Produto não encontrado");
            //     }
            //     else
            //     {
            //         produto.Nome = dadosProduto.Nome;
            //         produto.Preco = dadosProduto.Preco;
            //         _context.SaveChanges();
            //     }
            // }

            // return Result;
            return false;
        }

        public bool Delete(int id)
        {
            // Result Result = new Result();
            // Result.Acao = "Exclusão de Produto";

            // Produto produto = Obter(codigoBarras);
            // if (produto == null)
            // {
            //     Result.Inconsistencias.Add(
            //         "Produto não encontrado");
            // }
            // else
            // {
            //     _context.Produtos.Remove(produto);
            //     _context.SaveChanges();
            // }

            // return Result;
            return false;
        }
    }
}