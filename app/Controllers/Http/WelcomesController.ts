import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WelcomesController {

    public async index({ inertia }: HttpContextContract) {
      const Text = 'InertiaJS + Vue3 + Tailwind CSS + AdonisJS';
  
      return inertia.render('welcome', { Text });
    }

    public async about({ inertia }: HttpContextContract) {
      const Text = 'This is About Page';
  
      return inertia.render('About/About', { Text });
    }
  }