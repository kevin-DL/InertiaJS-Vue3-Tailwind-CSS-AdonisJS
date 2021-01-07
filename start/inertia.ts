import Inertia from '@ioc:EidelLev/Inertia';

Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get('errors');
  },
});