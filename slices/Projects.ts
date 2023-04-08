import { ProjectsType, ProjectType } from '@/utils/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ProjectsAPI = createApi({
	reducerPath: 'projects',
	baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/api` }),
	endpoints: (builder) => ({
		// Fetches all projects of current User
		fetchProjects: builder.query<ProjectsType[], string>({
			query: (userId) => `/${userId}`,
		}),

		// Fetches project of currently opened Project
		fetchProject: builder.query<ProjectType, string>({
			query: (projectId) => `/project/${projectId}`,
		}),

		// Creates a new Project
		createProject: builder.mutation({
			query: (body: {
				name: string;
				size: string;
				userId: string;
			}): any => ({
				url: '/project',
				method: 'POST',
				body,
			}),
		}),

		// Deletes a Project
		deleteProject: builder.mutation({
			query: (body: { projectId: string }) => ({
				url: '/project',
				method: 'DELETE',
				body,
			}),
		}),

		// Called when currently opened Project is saved
		updateProject: builder.mutation({
			query: (body: {
				projectId: string;
				details: { [name: string]: string };
			}) => ({
				url: '/project',
				method: 'PUT',
				body,
			}),
		}),

		// Called when a project is renamed in "/projects" route
		renameProject: builder.mutation({
			query: (body: { id: string; name: string }) => ({
				url: '/project',
				method: 'PATCH',
				body,
			}),
		}),
	}),
});

export default ProjectsAPI;

export const {
	useFetchProjectsQuery,
	useCreateProjectMutation,
	useDeleteProjectMutation,
	useUpdateProjectMutation,
	useRenameProjectMutation,
} = ProjectsAPI;
