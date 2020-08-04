using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using JobPortal.Models.Context;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Repository
{
	/// <summary>
	/// Standard generic repo. If this will not be enough, can be extended.
	/// </summary>
	/// <typeparam name="TEntity"></typeparam>
	public interface IGenericRepository<TEntity> where TEntity : class
	{
		Task<IEnumerable<TEntity>> Get();
		IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate);
		Task<TEntity> FindById(Guid id);
		Task Create(TEntity item);
		void Update(TEntity item);
		void Remove(TEntity item);
		void RemoveRange(IEnumerable<TEntity> collection);
		Task SaveChanges();
	}

	public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
	{
		protected readonly DataContext _context;
		protected readonly DbSet<TEntity> _dbSet;

		public GenericRepository(DataContext context)
		{
			_context = context;
			_dbSet = context.Set<TEntity>();
		}

		public async Task<IEnumerable<TEntity>> Get()
		{
			return await _dbSet.ToListAsync();
		}

		public IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate)
		{
			return _dbSet.Where(predicate);
		}
		public async Task<TEntity> FindById(Guid id)
		{
			return await _dbSet.FindAsync(id);
		}


		public async Task SaveChanges()
		{
			await _context.SaveChangesAsync();
		}
		public async Task Create(TEntity item)
		{
			await _dbSet.AddAsync(item);
		}
		public void Update(TEntity item)
		{
			_context.Entry(item).State = EntityState.Modified;
		}

		public void Remove(TEntity item)
		{
			_dbSet.Remove(item);
		}

		public void RemoveRange(IEnumerable<TEntity> collection)
		{
			_dbSet.RemoveRange(collection);
		}
		
    }
}