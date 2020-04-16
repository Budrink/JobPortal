using System;
using System.Collections.Generic;
using System.Linq;
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
		IEnumerable<TEntity> Get();
		IEnumerable<TEntity> Get(Func<TEntity, bool> predicate);
		TEntity FindById(int id);
		void Create(TEntity item);
		void Update(TEntity item);
		void Remove(TEntity item);
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

		public IEnumerable<TEntity> Get()
		{
			return _dbSet.AsNoTracking().ToList();
		}

		public IEnumerable<TEntity> Get(Func<TEntity, bool> predicate)
		{
			return _dbSet.AsNoTracking().Where(predicate).ToList();
		}
		public TEntity FindById(int id)
		{
			return _dbSet.Find(id);
		}

		public void Create(TEntity item)
		{
			_dbSet.Add(item);
			_context.SaveChanges();
		}
		public void Update(TEntity item)
		{
			_context.Entry(item).State = EntityState.Modified;
			_context.SaveChanges();
		}
		public void Remove(TEntity item)
		{
			_dbSet.Remove(item);
			_context.SaveChanges();
		}
		
    }
}